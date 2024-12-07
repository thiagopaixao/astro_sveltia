export interface ComponentBase {
    type: string;
}

export interface IntroductionSectionProps extends ComponentBase {
    title: string;
    txtColor: string;
    bgColor: string;
    backgroundImage: string;
    body: string;
}
