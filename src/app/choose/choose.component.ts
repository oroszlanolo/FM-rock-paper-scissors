import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { timer } from 'rxjs';
import { Btn } from 'src/btns';
import { Result } from 'src/retult';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnChanges{
  @Input() btns!: Btn[];
  @Input() bonusMode!: boolean;
  @Output() choseEvent = new EventEmitter<null>();
  @Output() announceWinner = new EventEmitter<Result>();
  btnNum : number = 3;
  chosen? : number;
  enemy? : number;
  enemyDelay = 1700;
  announceDelay = 1200;
  result? : Result;
  Result = Result;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['bonusMode'].currentValue) {
      this.btnNum = 5
    } else {
      this.btnNum = 3;
    }
  }
  isHidden(i: number) : boolean {
    if(this.chosen != null && this.chosen != i) {
      return true;
    }
    return (!this.bonusMode && this.btns[i].bonus);
  }
  choose(n: number) {
    if(this.chosen == null) {
      this.chosen = n;
      this.choseEvent.emit();
      timer(this.enemyDelay).subscribe(a => this.enemyChooses());
    }
  }
  enemyChooses() {
    this.enemy = Math.floor(Math.random() * this.btnNum);
    timer(this.announceDelay).subscribe(a => this.announceResult(this.calcResult()));
  }
  calcResult() : Result {
    if(this.chosen == undefined || this.enemy == undefined) {
      return Result.LOSE;
    }
    const resNum = (this.chosen - this.enemy + this.btnNum) % this.btnNum;
    console.log(resNum);
    switch(resNum) {
      case 0:
        //TODO: DRAW
        return Result.DRAW;
      case 1:
        return Result.LOSE;
      case 2:
        return Result.WIN;
      case 3:
        return Result.LOSE;
      case 4:
        return Result.WIN;
      default:
        return Result.DRAW;
    }
  }
  announceResult(result: Result) {
    this.result = result;
    this.announceWinner.emit(result);
  }
  reset() {
    this.result = undefined;
    this.chosen = undefined;
    this.enemy = undefined;
  }
}
