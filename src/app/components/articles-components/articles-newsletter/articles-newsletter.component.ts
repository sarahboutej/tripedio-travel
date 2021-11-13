import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/shared/service/article/article.service';

@Component({
  selector: 'app-articles-newsletter',
  templateUrl: './articles-newsletter.component.html',
  styleUrls: ['./articles-newsletter.component.scss'],
})
export class ArticlesNewsletterComponent implements OnInit {
  @Input() data : any;
  newsLetterForm!: FormGroup;
  submitted = false;
  loading = false;
  errors: any = null;
  
  constructor(private formBuilder: FormBuilder,private articleService: ArticleService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.newsLetterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    });
  }
  get f() { return this.newsLetterForm.controls; }
  submit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.newsLetterForm.invalid) {
      return;
    }
    this.loading = true;
    let values = {"destination_name": this.data,"user_email":this.newsLetterForm.value.email};
    this.articleService.newsLetterForDestination(values).subscribe((data: any) => {
      this.toastr.success("Danke fürs Anmelden !", "");
      this.newsLetterForm.controls['email'].reset();
      this.submitted = false;
      this.loading = false;
    }, (error: any) => {
      this.toastr.error("Ein Fehler tritt auf !", "");
      this.errors = error.error.errors;
      this.loading = false;
    });
  }

  getError(param: any) {
    let error = null;
    if (this.errors) {
      if (typeof (error = this.errors.find((el: any) => el.param == param)) != 'undefined') {
        error = error.msg
      }
    }
    return error;
  }

}
