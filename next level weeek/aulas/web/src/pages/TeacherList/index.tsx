import React, { useState, FormEvent } from 'react';
import TeacherItem  from '../../components/TeacherItem';
import { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';
import './style.css';






function TeacherList(){
    const [teachers, setTeachers]=useState([]);


    const [subject,setSubject]=useState('');
    const [week_day,setWeek_day]=useState('');
    const [time,setTime]=useState('');

async function searchTeachers(e: FormEvent){
    e.preventDefault();
    
   const response= await api.get('classes',{
        params:{
            subject,
            week_day,
            time
        }
    });
    setTeachers(response.data);
}
    return(
        <div id="page-teacher-list" className="container">
        <PageHeader title="Estes dão os Proffys disponiveis.">
            <form id="search-teachers" onSubmit={searchTeachers}>
            <Select
                name="subject"
                 label="Matéria"
                 value={subject}
                 onChange={(e)=>{setSubject(e.target.value)}}
                 options={[
                     {value:'Artes', label:'Artes'},
                     {value:'Biologia', label:'Biologia'},
                     {value:'Ciências', label:'Ciências'},
                     {value:'Educação Física', label:'Educação Física'},
                     {value:'Fisica', label:'Fisica'},
                     {value:'Geografia', label:'Geografia'},
                     {value:'História', label:'História'},
                     {value:'Português', label:'Português'},
                     {value:'Matemática', label:'Matemática'},
                   ]}
                 
                 />
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    value={week_day}
                    onChange={(e)=>{setWeek_day(e.target.value)}}
                    options={[
                     {value:'1', label:'Segunda-feira'},
                     {value:'2', label:'Terça-feira'},
                     {value:'3', label:'Quarta-feira'},
                     {value:'4', label:'Quinta-feira'},
                     {value:'5', label:'Sexta-feira'},
                     {value:'6', label:'Sábado'},
                     {value:'0', label:'Domingo'},
                    
                 ]} 
                 />
    
               <Input
                type="time"
                name="time" 
                label="Hora"
                value={time}
                onChange={(e)=>{
                    setTime(e.target.value)
                  
                }}
                />
               <button type="submit">
                   Buscar
               </button>
                
            </form>
        </PageHeader>    
        <main> 
            {teachers.map((teacher: Teacher) =>{
                return  <TeacherItem key={teacher.id} teacher={teacher}/>;
            })}
            
        </main>
        </div>
    );
}

export default TeacherList;