(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/user-detail/user-detail.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/user-detail/user-detail.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"log-card\">\n  <mat-card-header>\n    <img mat-card-avatar [src]=\"mediaService.getProfileImageUrl(user._id, user.avatarUrl) | async\">\n    <mat-card-title>{{ user.firstName ? user.firstName + ' ' + user.lastName : 'I Need A Name' }}</mat-card-title>\n    <mat-card-subtitle>{{ user.email }}</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image [src]=\"mediaService.getProfileImageUrl(user._id, user.avatarUrl) | async\">\n  <mat-card-actions>\n    <i (click)=\"onEdit()\" class=\"material-icons\" style=\"padding-left: 5px\">edit</i>\n  </mat-card-actions>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/user-editor-dialog/user-editor-dialog.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/user-editor-dialog/user-editor-dialog.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Edit Profile</h2>\n<mat-dialog-content [formGroup]=\"userForm\">\n  <mat-form-field class=\"app-ctrl-full-width\">\n    <input matInput placeholder=\"First Name\" formControlName=\"firstName\" width=\"100%\">\n  </mat-form-field>\n  <br />\n  <mat-form-field class=\"app-ctrl-full-width\">\n    <input matInput placeholder=\"Last Name\" formControlName=\"lastName\" width=\"100%\">\n  </mat-form-field>\n  <br />\n  <a *ngIf=\"(imgUrl | async) && !isUploading\" (click)=\"selectFile()\">\n    <img [src]=\"imgUrl | async\" style=\"margin: 5px 2px 5px 2px; width: 98%\">\n  </a>\n  <a *ngIf=\"!(imgUrl | async) && !isUploading\" (click)=\"selectFile()\">\n    <div>\n      <mat-icon>add_photo_alternate</mat-icon><span style=\"display: inline-block; vertical-align: top; margin: 10px 0 0 15px\">Upload Photo</span>\n    </div>\n  </a>\n  <input type=\"file\" #fileControl style=\"display: none\" (change)=\"onFileSelected()\" />\n  <div *ngIf=\"isUploading\" style=\"display: flex; justify-content: center; margin: 30px 0 30px 0\">\n    <mat-spinner></mat-spinner>\n  </div>\n  <div *ngIf=\"uploadError\">\n    <p style=\"color: red\">Woops. There was an error attempting to upload your pic...</p>\n    <p style=\"color: red; font-style: italic\">{{ uploadError }}</p>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\" (click)=\"cancel()\">Cancel</button>\n  <button class=\"mat-raised-button mat-primary\" (click)=\"save()\" [disabled]=\"!userForm.valid\">Save</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/containers/user-detail-container/user-detail-container.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/containers/user-detail-container/user-detail-container.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-user-detail [user]=\"user$ | async\" (updateItem)=\"updateUser($event)\"></app-user-detail>\n");

/***/ }),

/***/ "./src/app/user/components/user-detail/user-detail.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/user/components/user-detail/user-detail.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".log-card {\n  max-width: 400px;\n}\n\ni:hover {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jb21wb25lbnRzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nLWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG5pOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/user/components/user-detail/user-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user/components/user-detail/user-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_editor_dialog_user_editor_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-editor-dialog/user-editor-dialog.component */ "./src/app/user/components/user-editor-dialog/user-editor-dialog.component.ts");
/* harmony import */ var src_app_core_services_media_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/media.service */ "./src/app/core/services/media.service.ts");







let UserDetailComponent = class UserDetailComponent {
    constructor(dialog, mediaService) {
        this.dialog = dialog;
        this.mediaService = mediaService;
        this.updateItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next(true);
        this.ngUnsubscribe.complete();
    }
    onEdit() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = '350px';
        dialogConfig.data = this.user;
        const dialogRef = this.dialog.open(_user_editor_dialog_user_editor_dialog_component__WEBPACK_IMPORTED_MODULE_5__["UserEditorDialogComponent"], dialogConfig);
        dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe)).subscribe(data => {
            if (data) {
                this.updateItem.emit(data);
            }
        });
    }
};
UserDetailComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_media_service__WEBPACK_IMPORTED_MODULE_6__["MediaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserDetailComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserDetailComponent.prototype, "updateItem", void 0);
UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-detail',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/user-detail/user-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-detail.component.css */ "./src/app/user/components/user-detail/user-detail.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_core_services_media_service__WEBPACK_IMPORTED_MODULE_6__["MediaService"]])
], UserDetailComponent);



/***/ }),

/***/ "./src/app/user/components/user-editor-dialog/user-editor-dialog.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/user/components/user-editor-dialog/user-editor-dialog.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-ctrl-full-width {\n  width: 100%;\n}\n\na {\n  color: orange;\n}\n\na:hover {\n  cursor: pointer;\n  color: #3f51b5;\n}\n\nmat-icon {\n  font-size: 36px;\n}\n\nmat-dialog-actions button+button {\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3VzZXItZWRpdG9yLWRpYWxvZy91c2VyLWVkaXRvci1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy91c2VyLWVkaXRvci1kaWFsb2cvdXNlci1lZGl0b3ItZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWN0cmwtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG5cbm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG5tYXQtZGlhbG9nLWFjdGlvbnMgYnV0dG9uK2J1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/user/components/user-editor-dialog/user-editor-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/user/components/user-editor-dialog/user-editor-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserEditorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditorDialogComponent", function() { return UserEditorDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_file_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/file-upload.service */ "./src/app/core/services/file-upload.service.ts");
/* harmony import */ var src_app_core_services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/media.service */ "./src/app/core/services/media.service.ts");






let UserEditorDialogComponent = class UserEditorDialogComponent {
    constructor(dialogRef, fb, changeDetectorRef, uploadService, mediaService, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.changeDetectorRef = changeDetectorRef;
        this.uploadService = uploadService;
        this.mediaService = mediaService;
        this.isUploading = false;
        this.user = data;
    }
    ngOnInit() {
        this.buildForm();
        if (this.user.avatarUrl) {
            this.imgUrl = this.mediaService.getProfileImageUrl(this.user._id, this.user.avatarUrl);
        }
    }
    save() {
        this.user.firstName = this.userForm.controls['firstName'].value;
        this.user.lastName = this.userForm.controls['lastName'].value;
        this.dialogRef.close(this.user);
    }
    cancel() {
        this.dialogRef.close();
    }
    selectFile() {
        this.fileControl.nativeElement.click();
    }
    onFileSelected() {
        // this.isUploading = true;
        // this.uploadError = null;
        // const files: FileList = this.fileControl.nativeElement.files;
        // if (files.length > 0) {
        //   const file = files[0];
        //   this.uploadService.uploadProfilePic(file, this.user._id).pipe(take(1)).subscribe(response => {
        //     this.user.avatarUrl = response.file;
        //     this.imgUrl = this.mediaService.getProfileImageUrl(this.user._id, this.user.avatarUrl);
        //     this.isUploading = false;
        //     this.changeDetectorRef.detectChanges();
        //   }, error => {
        //     this.isUploading = false;
        //     this.uploadError = this.formatError(error);
        //     this.changeDetectorRef.detectChanges();
        //   });
        // }
    }
    buildForm() {
        this.userForm = this.fb.group({
            firstName: [this.user.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            lastName: [this.user.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    formatError(error) {
        if (error.error && error.error.message) {
            return error.error.message;
        }
        if (error && error.message) {
            return error.message;
        }
        if (error) {
            return error;
        }
        return null;
    }
};
UserEditorDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_file_upload_service__WEBPACK_IMPORTED_MODULE_4__["FileUploadService"] },
    { type: src_app_core_services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileControl', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], UserEditorDialogComponent.prototype, "fileControl", void 0);
UserEditorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-editor-dialog',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-editor-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/user-editor-dialog/user-editor-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-editor-dialog.component.css */ "./src/app/user/components/user-editor-dialog/user-editor-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        src_app_core_services_file_upload_service__WEBPACK_IMPORTED_MODULE_4__["FileUploadService"],
        src_app_core_services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"], Object])
], UserEditorDialogComponent);



/***/ }),

/***/ "./src/app/user/containers/user-detail-container/user-detail-container.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/user/containers/user-detail-container/user-detail-container.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29udGFpbmVycy91c2VyLWRldGFpbC1jb250YWluZXIvdXNlci1kZXRhaWwtY29udGFpbmVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user/containers/user-detail-container/user-detail-container.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/user/containers/user-detail-container/user-detail-container.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UserDetailContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailContainerComponent", function() { return UserDetailContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../root-store */ "./src/app/root-store/index.ts");




let UserDetailContainerComponent = class UserDetailContainerComponent {
    constructor(store$) {
        this.store$ = store$;
    }
    ngOnInit() {
        this.user$ = this.store$.select(_root_store__WEBPACK_IMPORTED_MODULE_3__["AuthenticationStoreSelectors"].selectUser);
    }
    updateUser(user) {
        this.store$.dispatch(_root_store__WEBPACK_IMPORTED_MODULE_3__["AuthenticationStoreActions"].updateUser({ user: user }));
    }
};
UserDetailContainerComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
UserDetailContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-detail-container',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-detail-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/containers/user-detail-container/user-detail-container.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-detail-container.component.css */ "./src/app/user/containers/user-detail-container/user-detail-container.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], UserDetailContainerComponent);



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _containers_user_detail_container_user_detail_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/user-detail-container/user-detail-container.component */ "./src/app/user/containers/user-detail-container/user-detail-container.component.ts");




const routes = [
    {
        path: '',
        component: _containers_user_detail_container_user_detail_container_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailContainerComponent"]
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _containers_user_detail_container_user_detail_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/user-detail-container/user-detail-container.component */ "./src/app/user/containers/user-detail-container/user-detail-container.component.ts");
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user-detail/user-detail.component */ "./src/app/user/components/user-detail/user-detail.component.ts");
/* harmony import */ var _components_user_editor_dialog_user_editor_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user-editor-dialog/user-editor-dialog.component */ "./src/app/user/components/user-editor-dialog/user-editor-dialog.component.ts");
















let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _components_user_editor_dialog_user_editor_dialog_component__WEBPACK_IMPORTED_MODULE_15__["UserEditorDialogComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_11__["UserRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
        ],
        declarations: [
            _containers_user_detail_container_user_detail_container_component__WEBPACK_IMPORTED_MODULE_13__["UserDetailContainerComponent"],
            _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_14__["UserDetailComponent"],
            _components_user_editor_dialog_user_editor_dialog_component__WEBPACK_IMPORTED_MODULE_15__["UserEditorDialogComponent"]
        ]
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map