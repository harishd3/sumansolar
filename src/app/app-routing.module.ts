import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';

// const routes: Routes = [
//   { path: "", redirectTo: "dashboard", pathMatch: "full" },  // <--- ADD THIS
//   { path: "home", component: HomeComponent },
//   { path: "about", component: AboutComponent },
//   { path: "service", component: ServiceComponent },
//   { path: "contact", component: ContactsComponent },
//   {path:"gallery",component:GalleryComponent},
//   {path: "footer",component:FooterComponent},
//   { path: "404", component: NotfoundComponent },
//   // { path: "**", redirectTo: "404" }
// ];

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" }, // <--- Redirect root to 'about'
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "service", component: ServiceComponent },
  { path: "contact", component: ContactsComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "footer", component: FooterComponent },
  { path: "404", component: NotfoundComponent },
  { path: "**", redirectTo: "404" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
