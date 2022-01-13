import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
id_user: string | undefined;
pw:string| undefined;
name:string |undefined;
playlists_data:any;
playlists_id:any;
id_selected_playlist:string | undefined;
user_data:any;
role: number | undefined;

  constructor() { }
}
