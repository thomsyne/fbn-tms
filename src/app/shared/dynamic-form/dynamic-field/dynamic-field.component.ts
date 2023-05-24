import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormControl, FormGroupDirective } from "@angular/forms";
import { Field, FieldType } from "../model";

@Component({
  selector: "app-dynamic-field",
  templateUrl: "./dynamic-field.component.html",
  styleUrls: ["./dynamic-field.component.scss"],
})
export class DynamicFieldComponent implements OnInit {
  @Input() field: Field;

  @ViewChild("password", { static: false })
  password: ElementRef<HTMLInputElement>;

  @Output() outputChange = new EventEmitter<{fieldName: string, value: any}>()

  public control: FormControl;
  public FieldType = FieldType;
  constructor(private formGroupDir: FormGroupDirective) {}

  ngOnInit() {
    /**
     * @angular/forms -> FormGroupDirective! 🎉
     *
     * https://angular.io/api/forms/FormGroupDirective
     * "Binds an existing FormGroup to a DOM element."
     *
     * We can easily access Reactive Forms functionality from this component in our
     * parent component without the need to pass our own inputs or event emitters.
     */

    this.control = this.formGroupDir.control.get(
      this.field.name
    ) as FormControl;
  }

  togglePassword(fieldToToggle: string) {
    if (this.password.nativeElement.id === fieldToToggle) {
      document
        .getElementById(`${fieldToToggle + "eye"}`)!
        .classList.toggle("slash");
      if (this.password.nativeElement.type === "password") {
        this.password.nativeElement.setAttribute("type", "text");
      } else {
        this.password.nativeElement.setAttribute("type", "password");
      }
    }
  }

  emitValue(event: any, fieldName: string){

    let payload = {
      fieldName,
      value: event.target.value
    }

    this.outputChange.emit(payload)
  }
}
