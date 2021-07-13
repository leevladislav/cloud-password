import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

import {UserInterface} from '../../auth/interfaces/user.interface';
import {ProfileService} from '../../dashboard/profile/services/profile.service';
import {AuthService} from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  links = [
    {url: '/all-passwords', name: 'All Passwords'},

    {url: '/wallets', name: 'Wallets'},
    {url: '/categories', name: 'Categories'},
    {url: '/overview', name: 'Overview'},
    {url: '/analytics', name: 'Analytics'},
    {url: '/history', name: 'History'},
    {url: '/order', name: 'Add order'}
  ];

  profile$: Observable<UserInterface> = this.profileService.getProfile();

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private profileService: ProfileService,
    private dialog: MatDialog,
    // private walletsService: WalletsService,
    // private expensesService: ExpensesService,
  ) {
  }

  ngOnInit(): void {
    // this.getWallets();
    // this.getExpenses();
  }

  // getWallets(): void {
  //   const walletsSub = this.walletsService.wallets$
  //     .subscribe((wallets: Wallet[]) => {
  //       this.wallets = [...wallets || []];
  //       this.countBalance();
  //     });

  //   this.subscriptions.push(walletsSub);
  // }

  // countBalance(): void {
  //   this.balance = this.wallets.reduce((total, item) => total += item.budget, 0);
  // }

  // getExpenses(): void {
  //   const expensesSub = this.expensesService.expenses$
  //     .subscribe((expenses: Expense[]) => this.countExpenses(expenses));

  //   this.subscriptions.push(expensesSub);
  // }

  // countExpenses(expenses): void {
  //   this.expenses = expenses.reduce((total, item) => total += item.expense, 0);
  // }

  toggleSidebar(): void {
  }

  addIncome(): void {
    //   this.dialog.open(ModalAddIncomeComponent, {
    //     data: this.wallets,
    //     panelClass: ['primary-modal', 'modal-md'],
    //     autoFocus: false
    //   });
  }

  ngOnDestroy(): void {
    // this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
    // unsubscribe(this.subscriptions);
  }

  logout(event: Event): void {
    event.preventDefault();

    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
