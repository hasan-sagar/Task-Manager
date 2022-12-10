import cogoToast from "cogo-toast";

const EmailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const MobileRegex = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

class FormHelper {
  IsEmpty(value) {
    return value.length === 0;
  }
  IsMobile(value) {
    return MobileRegex.test(value);
  }
  IsEmail(value) {
    return !EmailRegex.test(value);
  }
  ErrorToast(msg) {
    cogoToast.warn(msg, { position: "bottom-right" });
  }
  SuccessToast(msg) {
    cogoToast.success(msg, { position: "bottom-right" });
  }
}

export const { IsEmpty, IsMobile, IsEmail, ErrorToast, SuccessToast } =
  new FormHelper();
