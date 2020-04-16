import React, {Component} from 'react';
import './binarySort.css';
import Column from './column';
import sleep from 'await-sleep';


class BinarySort extends Component {
   constructor(props){
		super(props);
		this.state = {
			arr: [],
			numOfCols: 100,
			columnRender: [],
			addColumns: "",
			randomArr: [],
		}
		this.handleSort = this.handleSort.bind(this);
		this.randomColumns = this.randomColumns.bind(this);
		// this.addColumns = this.addColumns.bind(this);
		// this.quickSort = this.quickSort.bind(this);
   }


   //Create certain number of columns in a random order
   randomColumns() {
	   let numOfCols = this.state.numOfCols;
	   let randomArr = [];
	   while(randomArr.length < numOfCols){
			var r = Math.floor(Math.random() * numOfCols) + 1;
			if(randomArr.indexOf(r) === -1) randomArr.push(r);
	   }
 
	   this.setState({
		   arr : randomArr
	   })
   }
   

//    Main sorting function
   handleSort(){
	let arr = this.state.arr;
	let low = 0;
	let high = arr.length-1;
	const quickSort = (arr, low, high) => {
		if(low < high) {
			let pi = partition(arr, low, high);
			quickSort(arr, low, pi - 1);
			quickSort(arr, pi + 1, high);
		}
		
	}

	const partition = (arr, low, high) => {
		let pivot = arr[high];
		let i = low - 1;
		for(let j = low; j < high; j++) {
			if(arr[j] < pivot) {
				i++;
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
				this.setState({arr:arr});	
			}
		}	
		
		let temp = arr[i+1];
		arr[i+1] = arr[high];
		arr[high] = temp;
		this.setState({arr: arr});
		return i+1;

	}
	quickSort(arr, low, high);
	this.setState({arr:arr}, () => {console.log(this.state.arr)} );

	
	
	
  }

  render(){
	return (
		<div>
			<div class = "container">
				{this.state.arr.map((height) => (
					<Column height = {height + "%"}  />
				))}

			</div>
			
			<button onClick = {() => {this.handleSort()}} >Start</button>
			<button onClick = {() => {this.randomColumns()}}>Create Columns</button>
		</div>
	  );
  }

}

export default BinarySort;
