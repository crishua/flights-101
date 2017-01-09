#### Testing skyscanner live pricing API

.env:
```sh
API=Your api here
DB_URL=localhost:3306/scanner
DB_USR=scan
DB_PSW=scanner
POL=Your polling directory here
```

/routes.js

```javascript
module.exports = [
    {in:'ADL-iata',out:'CEB-iata'},
    {in:'ADL-iata',out:'HKG-iata'}
];
```

/dates.js

```javascript
  {out: '2016-11-04', in: '2016-11-11'},
  {out: '2016-11-05', in: '2016-11-12'},
  {out: '2016-11-06', in: '2016-11-13'}
```
