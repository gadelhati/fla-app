interface Jornada {
    game: Game[]
}
interface Matche {
    first_team: string,
    second_team: string,
    date: Date,
}
interface Game {
    first_team: Team,
    second_team: Team,
    winner?: string,
    date: Date,
}
interface Team {
    country: string,
    goals: number,
}
interface Classification {
    country: string,
    position: number,
    label: string,
    matches_played: number,
    won: number,
    tied: number,
    losses: number,
    goal_difference: number,
    points: number,
}