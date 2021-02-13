//lessons with answers

const q0 = {id:0,q:'who is daddy?',a:[
  {id: 1 ,name : 'Dfirst',key: false },
  {id: 2 ,name : 'Dsecond',key: false },
  {id: 3 ,name : 'Dthird',key: true },
  {id: 4 ,name : 'Dfourth',key: false }]}

const q1 = {id:1,q:'who is daddy?',a:[
  {id: 1 ,name : 'Dfirst',key: false },
  {id: 2 ,name : 'Dsecond',key: false },
  {id: 3 ,name : 'Dthird',key: true },
  {id: 4 ,name : 'Dfourth',key: false }]}

  const q2 = {id:2,q:'who is daddy?',a:[
    {id: 1 ,name : 'Dfirst',key: false },
    {id: 2 ,name : 'Dsecond',key: false },
    {id: 3 ,name : 'Dthird',key: true },
    {id: 4 ,name : 'Dfourth',key: false }]}

    const q3 = {id:3,q:'who is daddy?',a:[
      {id: 1 ,name : 'Dfirst',key: false },
      {id: 2 ,name : 'Dsecond',key: false },
      {id: 3 ,name : 'Dthird',key: true },
      {id: 4 ,name : 'Dfourth',key: false }]}

      const q4 = {id:4,q:'кто был первым президентом?',a:[
      {id: 3 ,name : `` ,key: true }
      ]}
  
  //imitation server work
  localStorage.setItem('newLesson', JSON.stringify([q0,q1,q2,q3,q4]));