export default function SelectedPage({title, setSelection, chapter}){
  return (
    <div>
      <div>
        <button onClick={() => setSelection(null)}>Back</button>
      </div>
      <div class="sg-row" style={{
        height:60,
        //background:'blue',
        width:'100%'}}>
        <div class="flex-expand"/>
        <div class="sg-row" style={{
          display:'flex',
          height:40,
           borderBottom:'1px solid #eee'}}>
          <div style={{flex:1}}/>
          <div style={{
            //background:'yellow'
          }}>{title}</div>
          <div style={{flex:1}}/>
        </div>
        <div class="flex-expand"/>
      </div>

      <div class="fair-margin">
        {Object.entries(chapter).map(entry => {
          let [sectionName, content] = entry;
          return (
            <div class="fair-margin">
              <h3>{sectionName}</h3>
              <div>{content}</div>
            </div>
          )
        })}
      </div>

    </div>

  )
}
