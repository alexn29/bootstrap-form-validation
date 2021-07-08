import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

	public contactForm!: FormGroup;
	
	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.initForm();
	}

	public initForm(): void {
		this.contactForm = this.formBuilder.group({
			name: [null, [Validators.required, Validators.minLength(8)]],
			email: [null, [Validators.required, Validators.email]],
			subject: [null, [Validators.required, Validators.minLength(15)]],
			comment: [null, [Validators.required, Validators.minLength(30)]]
		});
	}

	public onSubmit(): void {

		const { valid } = this.contactForm;

		if (!valid) return;

		alert(JSON.stringify(this.contactForm.getRawValue(), null, 4))
	}
}
