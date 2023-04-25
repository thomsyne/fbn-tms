import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilityModule } from "../utility/utility.module";
import { FileUploadComponent } from "./components/file-upload/file-upload.component";

@NgModule({
  declarations: [FileUploadComponent],
  imports: [CommonModule, UtilityModule],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}
