export type UserData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
};

export type InputProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export type CardsProps = {
  data: UserData[];
  handleOpen: (data: UserData) => void;
};

export type ModalProps = {
  modal: boolean;
  handleClose: () => void;
  selectedUserData: UserData;
};
