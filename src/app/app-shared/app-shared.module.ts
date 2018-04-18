import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "../app-material/app-material.module";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { getReducers, reducerToken } from "../app-reducers";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot(reducerToken),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    RouterModule
  ],
  declarations: [],
  providers: [{
    provide: reducerToken,
    useFactory: getReducers
  }]
})

export class AppSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppSharedModule
    };
  }
}
