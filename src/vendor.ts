import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/do";
import "jquery";

import "bootstrap/js/dist/util";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/carousel";
import "bootstrap/js/dist/alert";
import "bootstrap/js/dist/button";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/scrollspy";



//import "bootstrap/dist/js/bootstrap.min";

import * as toastr from "toastr";

require("!style!css!./vendor.css");

toastr.options.preventDuplicates = true;

if ('production' === ENV) {
} else {
}

