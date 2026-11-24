# Weirdest Job Title: Blind Judge Showdown

[![make.fun](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![Rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/satscribe-dev/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/rank.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![Reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/satscribe-dev/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/reward.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

Entry for the make.fun bounty
[u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
($5 total prize, 10 paid places).

## The entry

One job title, 45 characters:

> Senior Vice President of Apologizing to Geese

Chosen from 8 candidates by local pairwise judging against the published
judge brief (weird job title first, then stranger twist, funny on first read,
sounds like a real job, reads instantly). A sky-high corporate title doing
the lowliest, most impossible job — apologizing to geese, who famously do
not accept apologies.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the title to
`/output/entry.txt`. That is the whole program — the competition's gate
checks the file is UTF-8 text of 1–60 characters.

## Local verification

```
node main.ts
cat /output/entry.txt   # Senior Vice President of Apologizing to Geese
```

Gate check (local mirror of the sealed scorer): 45 characters, UTF-8,
not whitespace-only. There is no local grade for this competition — the
server grades every entry.

## License

MIT — see [LICENSE](LICENSE).
