import { NgModule } from "@angular/core";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [RouterModule],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
  providers: []
})
export class CoreModule {}
