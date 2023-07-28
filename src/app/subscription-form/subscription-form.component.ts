import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from '../models/subscription';
import { SubscribersService } from '../service/subscribers.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {
  isSubscribe: boolean = false;
  constructor(private subservice: SubscribersService, private toastr: ToastrService) { }
  onSubmit(f: any) {
    let form: Subscription = {
      names: f.names,
      email: f.email
    }

    this.subservice.checkSubs(form.email).subscribe(val => {
      if (val.empty) {
        this.subservice.addSub(form);
        this.isSubscribe = true;
      } else {
        this.toastr.warning('Email address is already in use');
      }
    });
  }
}

