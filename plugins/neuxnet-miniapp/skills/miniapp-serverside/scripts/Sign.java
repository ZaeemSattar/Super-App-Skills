/**
 * Neuxnet OpenAPI request signing (Java, JDK 8+, no dependencies).
 *
 * Algorithm, per the reference implementation in the Neuxnet docs:
 *   1. Put `secret` into the parameter map alongside the business params.
 *   2. Sort ALL keys in dictionary order (so `secret` sorts into position --
 *      it is NOT appended at the end).
 *   3. Concatenate `key=value` pairs with NO separator between pairs.
 *   4. SHA256 the result, lowercase hex.
 *   5. Send params + appid + timestamp + sign as form-urlencoded.
 *
 * `sign` and `fileData` never participate in the signature.
 */
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.StringJoiner;
import java.util.TreeMap;

public class Sign {

    /** Arrays and collections join with commas; everything else uses toString(). */
    public static String transToStr(Object obj) {
        if (obj == null) {
            return "";
        }
        if (obj instanceof Collection) {
            StringJoiner joiner = new StringJoiner(",");
            for (Object o : (Collection<?>) obj) {
                joiner.add(String.valueOf(o));
            }
            return joiner.toString();
        }
        if (obj.getClass().isArray()) {
            StringJoiner joiner = new StringJoiner(",");
            for (Object o : (Object[]) obj) {
                joiner.add(String.valueOf(o));
            }
            return joiner.toString();
        }
        return obj.toString();
    }

    public static String sign(Map<String, Object> params, String secret) {
        Map<String, Object> signing = new TreeMap<>(params);
        signing.put("secret", secret);

        StringBuilder signStr = new StringBuilder();
        for (Map.Entry<String, Object> entry : signing.entrySet()) {
            String key = entry.getKey();
            if ("sign".equals(key) || "fileData".equals(key)) {
                continue;
            }
            signStr.append(key).append("=").append(transToStr(entry.getValue()));
        }
        return sha256Hex(signStr.toString());
    }

    /** Adds appid + timestamp + sign and returns a form-urlencoded body. */
    public static String buildSignedBody(Map<String, Object> params, String appid, String secret) {
        Map<String, Object> full = new LinkedHashMap<>(params);
        full.put("appid", appid);
        full.put("timestamp", System.currentTimeMillis());
        full.put("sign", sign(full, secret));

        StringJoiner body = new StringJoiner("&");
        for (Map.Entry<String, Object> entry : full.entrySet()) {
            body.add(entry.getKey() + "=" + urlEncode(transToStr(entry.getValue())));
        }
        return body.toString();
    }

    private static String urlEncode(String value) {
        try {
            return java.net.URLEncoder.encode(value, "UTF-8");
        } catch (Exception e) {
            throw new IllegalStateException(e);
        }
    }

    public static String sha256Hex(String str) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] bytes = digest.digest(str.getBytes(StandardCharsets.UTF_8));
            StringBuilder hex = new StringBuilder(bytes.length * 2);
            for (byte b : bytes) {
                String s = Integer.toHexString(b & 0xFF);
                if (s.length() == 1) {
                    hex.append('0');
                }
                hex.append(s);
            }
            return hex.toString();
        } catch (Exception e) {
            throw new IllegalStateException(e);
        }
    }

    public static void main(String[] args) {
        Map<String, Object> vector = new LinkedHashMap<>();
        vector.put("appid", "demo-appid");
        vector.put("code", "abc123");
        vector.put("grantType", "authorization_code");
        vector.put("scope", "user.info");
        vector.put("timestamp", 1700000000000L);
        System.out.println(sign(vector, "demo-secret"));
    }
}
