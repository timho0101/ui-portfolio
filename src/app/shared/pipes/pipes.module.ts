import { NgModule } from '@angular/core';
import { CountPipe } from './count-pipe';
import { CustomPipeReverseStr } from './reverse-string-pipe';

@NgModule({
  imports: [],
  exports: [CountPipe, CustomPipeReverseStr],
  declarations: [CountPipe, CustomPipeReverseStr],
  providers: []
})
export class PipesModule {}
