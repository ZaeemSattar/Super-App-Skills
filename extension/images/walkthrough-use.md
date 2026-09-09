## Just ask Claude

You never type a skill name. Each skill declares when it applies, and Claude
loads the matching one on its own:

- *"scaffold a new Neuxnet mini app"* → `miniapp-create`
- *"add checkout to this page"* → `miniapp-payment`
- *"why is my notifyUrl callback not firing?"* → `miniapp-payment`
- *"set up login for this mini app"* → `miniapp-auth`

You can still force one with `/miniapp-payment` if you want a specific skill.
