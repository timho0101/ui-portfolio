import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rs-carousel-control',
  templateUrl: './rs-carousel-control.component.html',
  styleUrls: ['./rs-carousel-control.component.scss']
})
export class RsCarouselControlComponent implements OnInit {

  public rsCarouselControlComponent = `
  import './carousel-controls.scss?ng1';
  export default carouselControls;

  /* @ngInject */
  function carouselControls(): ng.IDirective {
    return {
      link,
      require: '?^uibCarousel',
      restrict: 'E',
      scope: {
        title: '@'
      },
      templateUrl: './carousel-controls.html'
    };

    function link(scope, element, attrs, carouselCtrl) {
      element
        .parent()
        .parent()
        .addClass('rs-carousel-controls');
      scope.prev = carouselCtrl.prev;
      scope.next = carouselCtrl.next;
      scope.active = carouselCtrl.getCurrentIndex;
      scope.slides = carouselCtrl.slides;
      scope.title = carouselCtrl.title;
    }
  }
  `;

  public rsxCarouselControlComponent = `
  import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

  @Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'rsx-carousel-controls',
    styleUrls: ['./carousel-controls.component.scss'],
    templateUrl: './carousel-controls.component.html'
  })
  export class CarouselControlsComponent {
    @Input() public slides: Slides[];
    @Input() public currentSlideIndex: number;
    @Output() public slideEvent = new EventEmitter<number>();

    public next() {
      if (this.currentSlideIndex < this.slides.length - 1) {
        this.currentSlideIndex = this.currentSlideIndex + 1;
      } else {
        this.currentSlideIndex = 0;
      }
      this.slideEvent.emit(this.currentSlideIndex);
    }

    public previous() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex = this.currentSlideIndex - 1;
      } else {
        this.currentSlideIndex = this.slides.length - 1;
      }
      this.slideEvent.emit(this.currentSlideIndex);
    }
  }
  export interface Slides {
    category: string;
    description: string;
    imageClass: string;
    lineOfBusiness: string;
    serviceNames: string[];
    title: string;
  }
  `;

  public rsCarouselControlHtml = `
  <div class="row controls">
    <div class="col-xs-3 col-sm-3 arrow left" ng-click="prev()">&#8249;</div>
    <div class="col-xs-6 col-sm-6 center-text">
      <h4 class="text-center counter margin-top-m" ng-if="!title">{{ active() + 1 }} / {{ slides.length }}</h4>
      <h4 class="text-center counter margin-top-m" ng-if="title">{{ title }}</h4>
    </div>
    <div class="col-xs-3 col-sm-3 arrow right" ng-click="next()">&#8250;</div>
  </div>

  `;

  public rsxCarouselControlHtml = `
  <div class="row controls rs-carousel-controls">
    <div class="col-xs-3 col-sm-3 arrow left" (click)="previous()">&#8249;</div>
    <div class="col-xs-6 col-sm-6 center-text">
      <ng-content select="[index]"></ng-content>
      <ng-content select="[title]"></ng-content>
    </div>
    <div class="col-xs-3 col-sm-3 arrow right" (click)="next()">&#8250;</div>
  </div>
  `;

  public rsScss = `
    .rs-carousel-controls {
      .carousel-control {
        display: none;
      }

      .carousel-indicators {
        display: none;
      }

      .arrow {
        font-size: 36px;
      }

      .arrow.left {
        text-align: right;
      }

      .arrow.right {
        text-align: left;
      }
    }
  `;

  public rsxScss = `
    .rsx-carousel-controls {
      .carousel-control {
        display: none;
      }

      .carousel-indicators {
        display: none;
      }

      .arrow {
        font-size: 36px;
      }

      .arrow.left {
        text-align: right;
      }

      .arrow.right {
        text-align: left;
      }
    }
  `;

  public rsSpec = `
    import 'angular-mocks';
    import * as angular from 'angular';
    import * as chai from 'chai';
    import * as sinonChai from 'sinon-chai';

    const expect = chai.expect;

    /* tslint:disable:no-unused-expression */
    chai.use(sinonChai);

    describe('rsCarouselControls directive', () => {
      let $element;

      beforeEach(angular.mock.module('ui.bootstrap'));
      beforeEach(angular.mock.module('rscomUi.elements'));
      beforeEach(
        inject($injector => {
          const $compile = $injector.get('$compile');
          const $rootScope = $injector.get('$rootScope').$new();
          $element = $compile(
            '<uib-carousel><rs-carousel-controls></rs-carousel-controls></uib-carousel>'
          )($rootScope);
          $rootScope.$digest();
        })
      );

      it('should compile', () => {
        expect($element.length).to.equal(1);
      });
    });
  `;

  public rsxSpec = `
    import { Component, ViewChild } from '@angular/core';
    import { ComponentFixture, TestBed } from '@angular/core/testing';
    import chai from 'chai';
    import chaiAsPromised from 'chai-as-promised';
    import sinon from 'sinon';
    import sinonChai from 'sinon-chai';
    import { CarouselControlsComponent } from './carousel-controls.component';
    chai.use(sinonChai);
    chai.use(chaiAsPromised);
    const expect = chai.expect;

    @Component({
      selector: 'test-host-component',
      template:
        <rsx-carousel-controls
          [slides]="getProducts"
          [currentSlideIndex]="currentSlideIndex"
          (slideEvent)="slideEventHandler($event)"
        ></rsx-carousel-controls>
    })

    class TestHostComponent {
      @ViewChild(CarouselControlsComponent) public CarouselControls: CarouselControlsComponent;
      public getProducts = ['mock1', 'mock2', 'mock3'];
      public currentSlideIndex = 0;
      public slideEventHandler = sinon.stub();
    }
    describe('RsxCarouselControlsComponent', () => {
      let testHost: TestHostComponent;
      let component: CarouselControlsComponent;
      let fixture: ComponentFixture<TestHostComponent>;
      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [CarouselControlsComponent, TestHostComponent]
        });
      });
      beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
        component = testHost.CarouselControls;
        fixture.detectChanges();
      });
      it('should create component', () => {
        expect(component).to.be.ok;
      });
      describe('previous', () => {
        it('sets the value of currentSlideIndex to (slides.length -1) if the value of currentSlideIndex is zero', () => {
          expect(component.currentSlideIndex).to.eql(0);
          component.previous();
          expect(component.currentSlideIndex).to.eql(2);
        });

        it('reduces the value of currentSlideIndex by 1 if the value of currentSlideIndex is greater than zero', () => {
          component.currentSlideIndex = 2;
          component.previous();
          expect(component.currentSlideIndex).to.eql(1);
        });

        it('emits the value of currentSlideIndex from the slideEvent output', () => {
          component.previous();
          expect(testHost.slideEventHandler).to.have.been.calledWith(component.currentSlideIndex);
        });
      });

      describe('next', () => {
        it('sets the value of currentSlideIndex to (0) if the value of currentSlideIndex is equal to (slides.length - 1)', () => {
          component.currentSlideIndex = 2;
          component.next();
          expect(component.currentSlideIndex).to.eql(0);
        });

        it('increases the value of currentSlideIndex by 1 if the value of currentSlideIndex is less than (slides.length - 1)', () => {
          component.currentSlideIndex = 0;
          component.next();
          expect(component.currentSlideIndex).to.eql(1);
        });
      });
      it('emits the value of currentSlideIndex from the slideEvent output', () => {
        component.next();
        expect(testHost.slideEventHandler).to.have.been.calledWith(component.currentSlideIndex);
      });
    });
  `;


  constructor() { }

  ngOnInit() {
  }

}
