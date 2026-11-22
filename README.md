# post-x-the-agent-builds-a-game-westi

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/jefriidan15/post-x-the-agent-builds-a-game-westi/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/jefriidan15/post-x-the-agent-builds-a-game-westi/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt, one game, one short video. My AI agent was given a single prompt —
"Build me a tiny Snake game in one HTML file — make it actually fun to play" —
and built `game.html` from it, no edits after. The video shows the prompt, the
agent working, and the finished game running, and ends with make.fun's referral
end card carrying my code `s7vdxe79`.

## The game

`game.html` is the whole game in one file: neon Snake on a 24×24 board, arrow
keys or WASD to steer, score in the corner, and an autoplay bot
(`game.html?autoplay=1`) that chases the food and never hits a wall. Open it
in any browser and play.

## The entry

`POST.json` names the X post carrying the video. `main.ts` (Node 22, standard
library only) copies `POST.json` into the output directory, byte for byte:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=s7vdxe79&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
