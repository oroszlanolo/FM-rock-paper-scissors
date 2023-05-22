import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { btns } from 'src/btns';
import { ChooseComponent } from './choose/choose.component';
import { Result } from 'src/retult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  @ViewChild(ChooseComponent) private chooseComponent! : ChooseComponent;
  btns = btns;
  bonusMode = true;
  result? : Result;
  score = 0;
  chose = false;
  Result = Result;
  showRules = false;
  
  toggleBonus() {
    this.bonusMode = !this.bonusMode;
  }
  gotResult(result: Result) {
    this.result = result;
    if(this.result === Result.WIN) {
      this.score++;
    }
  }
  choose() {
    this.chose = true;
  }
  reset() {
    this.chooseComponent.reset();
    this.chose = false;
    this.result = undefined;
  }
  toggleRules() {
    this.showRules = !this.showRules;
  }
}
