export default class ScrollProgressionBar {
  constructor() {   
    this.addProgressionBar();
    this.onScroll();
  }

  updateProgressionBar() {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    this.progressionBar.style.width = `${scrollPercentage}%`;
  }

  addProgressionBar() {
    this.progressionBar = document.createElement('div');
    this.progressionBar.classList.add('scroll-progression-bar');
    this.progressionBar.style.width = '0%';
    document.body.appendChild(this.progressionBar);
  }

  onScroll() {
    window.addEventListener('scroll', () => {
      this.updateProgressionBar();
    });
  }
}