---
title: Code Playground
description: Here you can find certain samples, and play around with code, so you don't break other pages.
author: Vildravn
date: 2021-08-08T12:00:00.130Z
tableofcontents: toc
tags: draft
---

Here you can find certain samples, and play around with code, so you don't break other pages.

Please keep this page tagged as **draft** so it doesn't display under Guides, thanks :)

---

## Tooltips

Here you can see examples of tooltips, like the ones used by metabattle.  
For full HTML documentation of the **armory-embeds** script, go [here](https://madou.github.io/armory-embeds/).  
For the IDs, you'll currently have to use the [API](https://wiki.guildwars2.com/wiki/API:Main) and/or guesswork. Some links to the API are on the wiki, under the External Links section.

### Chat Code

You can embed many (but not all) things using an in game Chat Code like this:

{% chatcode "[&AgGqtgDgrxYAAOpfAAAnYAAA]" %}

{% chatcode "[&Bt2yAAA=]" %}

{% chatcode "[&BwoDAAA=]" %}

### HTML

Tooltips using HTML are more advanced, flexible and allow for displaying more things but also can easily get much more complicated. Below are some examples of HTML-based tooltips.
#### Items

A single item

<div
  data-armory-embed="items"
  data-armory-ids="25979"
>
</div>

Multiple items with stats

<div
  data-armory-embed="items"
  data-armory-ids="74155,77474,81462"
  data-armory-74155-stat="588"
  data-armory-77474-stat="584"
  data-armory-81462-stat="1012"
>
</div>

A single item with stats, upgrades and infusions

<div
  data-armory-embed="items"
  data-armory-ids="71383"
  data-armory-71383-stat="588"
  data-armory-71383-upgrades="24572,24615"
  data-armory-71383-infusions="49433,49433"
>
</div>

#### Skills

A single skill

<div
  data-armory-embed="skills"
  data-armory-ids="9102"
>
</div>

Multiple skills

<div
  data-armory-embed="skills"
  data-armory-ids="29705,30163,30860,29855,29740"
>
</div>

#### Specializations

A specialization with traits selected

<div
  data-armory-embed="specializations"
  data-armory-ids="56"
  data-armory-56-traits="2177,2061,2090"
>
</div>

Multiple specializations with selected traits

<div
  data-armory-embed="specializations"
  data-armory-ids="3,12,15"
  data-armory-3-traits="1732,1760,1719"
  data-armory-12-traits="1822,1819,1825"
  data-armory-15-traits="1767,1765,1800"
>
</div>