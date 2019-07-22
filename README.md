# Survey on Steroids
## We use Quorum to build this

All data is stored on two smart contracts, `tracker.sol` which keeps tracks of surveys, and `survey.sol` which is the survey itself.

## Set up
```
git clone https://github.com/ThomasRalee/SurveyKu.git
cd SurveyKu
npm install
```

### Set up front end
```
cd app
npm install
npm run serve
```

### Set up API backend

```
cd utils
npm install
node server.js
```


## API DOCUMENTATION

For the API to work, if this is your first time running this, please create a new TrackerContract.
```
cd utils
node init.js
```
The trackerContract address is immediately stored in teh trackers.json file automatically. The last added addresses is used as the latest tracker

### GET SURVEY IDS

| Params |
----------