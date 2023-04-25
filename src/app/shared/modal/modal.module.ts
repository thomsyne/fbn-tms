import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalComponent } from "./modal/modal.component";
import { UtilityModule } from "../utility";

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, UtilityModule],
  exports: [ModalComponent],
})
export class ModalModule {}
