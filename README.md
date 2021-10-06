# duration
Convert numeric values to duration in string

## Example
```
  const durationString = getDurationString((60*60*24*7*5)+(60*60*24*4)+(1*60*60*2)+(1*60*32)+(1*18)); // 5w 4d 2h 32m 18s
  const durationString = getDurationString(60); // 1m 0s
  const durationString = getDurationString(60*60*24,60*60*24); // 1d 0h 0s
  const durationString = getDurationString(60*60*2,60*60*2); // 2h 0m 0s
```
