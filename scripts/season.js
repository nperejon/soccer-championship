import Storage from './storage.js';

export default class Season {
    id;
    name;
    start;
    end;
    participant_teams;
    players_length;

    constructor(seasonId) {
        const season = Storage.get(seasonId);
        console.log(season);
        this.id = season.id;
        this.name = season.name;
        this.start = season.start;
        this.end = season.end;
        this.participant_teams = season.participant_teams;
        this.players_length = season.players.length;
    }

    get() {
        return {
            id: this.id,
            name: this.name,
            start: this.start,
            end: this.end,
            participant_teams: this.participant_teams,
            players_length: this.players_length
        }
    }
}