// types/component.ts
export interface ComponentType {
  type: string;
  txtColor?: string;
  bgColor?: string;
  backgroundImage?: string;
  title?: string;
  body?: string;
  components?: ComponentType[];
  // Adicione outros campos conforme necessário
}

export interface IntroductionSectionProps extends ComponentType {
  // Propriedades específicas, se necessário
}
