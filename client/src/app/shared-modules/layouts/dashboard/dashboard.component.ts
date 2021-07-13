import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {ProfileService} from '../../../dashboard/profile/services/profile.service';
import {UserInterface} from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor(
    // private auth: AuthService,
    // private router: Router,
    // private walletsService: WalletsService,
    // private categoriesService: CategoriesService,
    // private expensesService: ExpensesService
  ) {
  }

  ngOnInit(): void {
    // this.subscribeOnCategories();
    // this.subscribeOnWallets();
    // this.subscribeOnExpenses();

    // this.getCategories();
    // this.getWallets();
    // this.getExpenses();
  }

  // subscribeOnWallets(): void {
  //   const onWalletsUpdatedSub = this.walletsService.walletsUpdated$
  //     .pipe(filter((updated) => updated))
  //     .subscribe(() => this.getWallets());

  //   this.subscriptions.push(onWalletsUpdatedSub);
  // }

  // subscribeOnCategories(): void {
  //   const onCategoriesUpdatedSub = this.categoriesService.categoriesUpdated$
  //     .pipe(filter((updated) => updated))
  //     .subscribe(() => this.getCategories());

  //   this.subscriptions.push(onCategoriesUpdatedSub);
  // }

  // subscribeOnExpenses(): void {
  //   const onWalletsUpdatedSub = this.expensesService.expensesUpdated$
  //     .pipe(filter((updated) => updated))
  //     .subscribe(() => this.getExpenses());

  //   this.subscriptions.push(onWalletsUpdatedSub);
  // }

  // getCategories(): void {
  //   const fetchCategoriesSub = this.categoriesService.fetch()
  //     .subscribe((categories: Category[]) => this.categoriesService.throwCategories(categories));

  //   this.subscriptions.push(fetchCategoriesSub);
  // }

  // getWallets(): void {
  //   const fetchWalletsSub = this.walletsService.fetch()
  //     .subscribe((wallets: Wallet[]) => this.walletsService.throwWallets(wallets));

  //   this.subscriptions.push(fetchWalletsSub);
  // }

  // getExpenses(): void {
  //   const fetchExpensesSub = this.expensesService.fetch()
  //     .subscribe((expenses: Expense[]) => this.expensesService.throwExpenses(expenses));

  //   this.subscriptions.push(fetchExpensesSub);
  // }
}
