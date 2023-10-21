import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommitHistoryComponent} from "./commit-history/commit-history.component";

const routes: Routes = [
  {path: '', redirectTo: 'commit-history', pathMatch: 'full'},
  {path: 'commit-history', component: CommitHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
