#### Testing skyscanner live pricing API

.env:
```sh
API=Your api here
DB_URL=localhost:3306/scanner
DB_USR=scan
DB_PSW=scanner
POL=Your polling directory here
```

app/routes.js

```javascript
module.exports = [
  {in:'ADL-iata',out:'CEB-iata'}
];
```
