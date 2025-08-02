export interface configLayoutI {
  withFooter?: boolean;
  withNav?: boolean;
}
export const configLayout: Record<string, configLayoutI> = {
  login: {
    withFooter: true,
    withNav: false,
  },
  "sign-up": {
    withFooter: true,
    withNav: false,
  }
};
