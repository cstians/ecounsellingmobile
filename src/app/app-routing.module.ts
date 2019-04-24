import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';

const routes: Routes = [
  { path: '', redirectTo: 'chatscreen', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'developers', loadChildren: './developers/developers.module#DevelopersPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'depression-test', loadChildren: './depression-test/depression-test.module#DepressionTestPageModule' },
  { path: 'chatscreen', loadChildren: './chatscreen/chatscreen.module#ChatscreenPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    SocialSharing,
    File
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
