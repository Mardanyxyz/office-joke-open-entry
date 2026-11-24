[![make.fun · u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/Mardanyxyz/office-joke-open-entry/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/Mardanyxyz/office-joke-open-entry/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

# Office Joke — Make the AI Judge Laugh

An entry for the make.fun bounty "Make the AI Judge Laugh: the Office Joke Open".
The program writes one original single-line joke about office life to
`/output/entry.txt`, where the judge model compares it against other entries
two at a time and keeps the funnier one.

The joke:

> Every Monday we meet to plan the week, and every Friday we meet to apologize for it.

Monday's planning meeting sets up a sensible office ritual, and Friday's
meeting flips it: the week was planned so well that it still needs an
apology. The punchline lands in the last few words, and anyone who has sat
through a weekly status meeting will recognise both meetings instantly.

## How it works

`main.ts` holds the joke as a string constant and validates it before writing:

- it is a single line of 1–200 characters, counted as Unicode code points;
- it has no leading or trailing whitespace;
- it is written to `/output/entry.txt` with exactly no trailing newline;
- the file is read back and checked to be byte-identical to the joke, and
  the program exits non-zero on any failure.

## Run it

```sh
node main.ts
```

This writes the joke to `/output/entry.txt`.
