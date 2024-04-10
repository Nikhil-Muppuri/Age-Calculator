import {Component} from 'react'
import './index.css'


class UsersAge extends Component{
    state={userDateInput:'',yearResult:0,monthResult:0,dayResult:0,displayAge:false}

    userDate = (event)=>{
         this.setState({userDateInput:event.target.value})
    }

    onHandleSubmit=(event)=>{
        event.preventDefault();
        this.calculateDifferece()
    }

    calculateDifferece=()=>{
        const {userDateInput} = this.state
        const date1 = new Date(userDateInput)
        const day1 = date1.getDate()
        const month1=date1.getMonth()
        const year1 = date1.getFullYear()
        

        var date2 = new Date()
        var day2 = date2.getDate()
        var month2=date2.getMonth()
        var year2 = date2.getFullYear()

        var month=[31,28,31,30,31,30,31,31,30,31,30,31]

        if(day1>day2){
            day2=day2+month[month2-1]
            month2=month2-1
        }
        if(month1>month2){
            month2=month2+12
            year2 = year2-1
        }

        const day = day2-day1
        const Month = month2-month1
        const year = year2-year1
        this.setState({yearResult:year,monthResult:Month,dayResult:day})
        
    }

    onClickSubmit = ()=>{
        this.setState({displayAge:true})
    }

    onClickReset=()=>{
        this.setState({displayAge:false,userDateInput:""})
    }

    ageDisplay=()=>{
        const {yearResult,monthResult,dayResult} = this.state
        return(
        <div className='display-result-container'>
            <div className='years-container'>
               <p className='year-style'>{yearResult} <br/><span className='year-span'>Years</span></p>
            </div>
            <div className='years-container'>
          <p className='year-style'>{monthResult} <br/><span className='year-span'>Months</span></p>
          </div>
          <p className='year-style'>{dayResult} <br/><span className='year-span'>Days</span></p>
        </div>
    )}

    render(){
    const {userDateInput,displayAge}=this.state

return(
    <div>
        <form onSubmit={this.onHandleSubmit}>
            <div className='display-age-container'>
              <input type ="date" onChange={this.userDate} value={userDateInput} className='calendar-style'/>
              <div className='buttons-container'>
              <button type="submit" onClick={this.onClickSubmit} className='calculate-age-btn'>Calculate Age</button>
               <button type="button" onClick={this.onClickReset} className='Reset-age-btn'>Reset</button>
              </div>
               
            </div>  
        {displayAge && this.ageDisplay() }
        </form>
        
    </div>
)
    }
}

export default UsersAge