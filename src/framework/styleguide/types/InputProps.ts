import { UITypes } from '../hooks/types';

export interface BaseInputProps {
  pointer: string;
  label?: string;
  placeholder?: string;
}

export interface PageRawInputProps extends BaseInputProps {
  inputType?: UITypes;
  value?: string;
}
