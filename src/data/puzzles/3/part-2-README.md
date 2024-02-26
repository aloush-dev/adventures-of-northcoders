Sam decided we should run some statistical analysis on this data set, to do this we need to eliminate outliers. It is decided you should now only take into consideration groups of three or more mentees and furthermore you should remove the highest and lowest times from each group.

Now with the same example input:

```md
<ul>
  <li>5</li>
  <li>8</li>
  <li>5</li>
  <li>4</li>
  <li>9</li>
</ul>
<ul>
  <li>10</li>
  <li>3</li>
  <li>32</li>
</ul>
```

```md
<ul>
  <li>5</li>
  <li>8</li>
  <li>5</li>
</ul>
<ul>
  <li>10</li>
</ul>
```

The `9 and 4 (highest and lowest respectively)` are removed from the first group and the
`3 and 32` from the second. This leaves is with group totals of `18` and just the `10` from the second leaving is with a new total of `28`

What is the new total?
