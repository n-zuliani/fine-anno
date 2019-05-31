import { Utenti } from './utenti.model';

export class Comments{
    constructor(public titolo: string, public user: Utenti, public comments: Comments[]){}
}