import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private http: HttpClient) { }

  private _listClientJournalsUrl = 'http://localhost:3000/api/journal/listClientJournals'
  private _listJournalsUrl= 'http://localhost:3000/api/journal/listJournals'
  private _addJournalUrl= 'http://localhost:3000/api/journal/addJournal'
  private _updateJournalUrl='http://localhost:3000/api/journal/updateJournal'
  private _deleteJournalUrl='http://localhost:3000/api/journal/deleteJournal'

  listJournal(){
    return this.http.get<any>(this._listJournalsUrl)
  }

  listClientJournals(client: any){
    return this.http.post<any>(this._listClientJournalsUrl,client)
  }

  addJournal(journal: any){
    return this.http.post(this._addJournalUrl,journal)
  }

  updateJournal(journal: any){
    return this.http.post<any>(this._updateJournalUrl,journal)
  }
  
  deleteJournal(journal: any){
    return this.http.post<any>(this._deleteJournalUrl,journal)
  }
}
