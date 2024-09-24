import './App.css';
import Sport from './components/sports';

const App = () => {

  return (
    <div className="App">

      <img className='topPicture' src="https://www.shutterstock.com/image-photo/collage-different-professional-sportsmen-fit-600nw-1961268013.jpg" alt="" />

      <h3 className='heading'>Neighborhood Sports Events</h3>

      <div className="content">

        <Sport name='Pickle Ball' 
        date='09/25/2024' 
        link='https://usapickleball.org/events/'
        image='https://ymcalincoln-org.storage.googleapis.com/files/s3fs-public/2022-10/brendan-sapp-l5ux-burc3e-unsplash.jpg'
        />

        <Sport name='Football' 
        date='09/29/2024' 
        link='https://www.espn.com/soccer/schedule'
        image='https://cdn.prod.website-files.com/624377e20c9e225e2e55e2ed/63f7c9ccf28d7d7ba5f1c1ff_football-1396740_1280.jpg'
        />

        <Sport name='Cricket' 
        date='10/03/2024' 
        link='https://www.cricbuzz.com/cricket-schedule/series'
        image='https://media.assettype.com/sentinelassam-english%2F2024-02%2F8dcaeb67-45a2-4dd5-9c02-95d68d13129d%2Fcricket_sm.jpg'
        />

        <Sport name='Boxing' 
        date='10/10/2024' 
        link='https://www.espn.com/boxing/story/_/id/12508267/boxing-schedule'
        image='https://as2.ftcdn.net/v2/jpg/01/63/79/89/1000_F_163798969_qrlYJT24qCW5Wusbvbid7W6AMcPBsxFZ.jpg'
        />

        <Sport name='Cycling' 
        date='10/15/2024' 
        link='https://www.bikereg.com/events/OKLAHOMA/'
        image='https://xsfitness.com.au/wp-content/uploads/2022/07/Cycling-is-Beneficial-1024x576.png'
        />

        <Sport name='Tennis' 
        date='10/17/2024' 
        link='https://www.atptour.com/en/tournaments'
        image='https://reviewed-com-res.cloudinary.com/image/fetch/s--GrtoX08Y--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_972,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1597356287543/GettyImages-1171084311.jpg'
        />

        <Sport name='Swimming' 
        date='10/19/2024' 
        link='https://www.gomotionapp.com/team/czokslsc/page/events'
        image='https://i0.wp.com/blog.myswimpro.com/wp-content/uploads/2022/12/freestyle-swimming-stroke-myswimpro-taylor.jpg?fit=2000%2C1500&ssl=1'
        />

        <Sport name='Fishing' 
        date='10/21/2024' 
        link='https://hscfdn.org/convention/attendees/?gad_source=1&gclid=Cj0KCQjwo8S3BhDeARIsAFRmkOOjuVDAMuXbMlrDrvPJjcXS1rYRFprF2wx2-RrX6dH3tS2ZmSJ9jgEaAgTWEALw_wcB'
        image='https://lirp.cdn-website.com/4d552241/dms3rep/multi/opt/saltwater-fishing-techniques-st-augustine-fl-1920w.jpg'
        />

        <Sport name='Marathon' 
        date='10/22/2024' 
        link='https://okcmarathon.com/event-information/weekend-schedule/'
        image='https://res.cloudinary.com/peloton-cycle/image/fetch/c_fill,dpr_1.0,w_1024,h_768,x_2262,y_1379/f_auto/q_auto/https://images.ctfassets.net/6ilvqec50fal/FbOXaCWxwuI975XgxlDms/1d9bc48af213a35b62fa2dc8a1dbb362/Running_Marathon.jpg'
        />

        <Sport name='Golf' 
        date='10/28/2024' 
        link='https://familyfairways.org/rowdy-golf-planner?gad_source=1&gclid=Cj0KCQjwo8S3BhDeARIsAFRmkONDO8WWywxLj2fonPq6nsVQaQxd9Zc1QoBRhIORZy5fbmo1bUifsaMaAthHEALw_wcB'
        image='https://villagrouploreto.s3.amazonaws.com/uploads/article/cover_en/391/what-golf-clubs-to-use-for-each-shot.jpg'
        />

        <Sport name='Hockey' 
        date='11/04/2024' 
        link='https://www.fih.hockey/events'
        image='https://www.polytan.com/wp-content/uploads/2020/04/Hockey-FIH-4-Nations-Men-Germany-Ireland-20180727-0739x-scaled.jpg'
        />

        <Sport name='Archery' 
        date='11/07/2024' 
        link='https://www.usarchery.org/events/find-an-event'
        image='https://image.springbeetle.com/cdn-cgi/image/dpr=1,format=webp/https://s3.springbeetle.com/prod-us-bucket/trantor/attachments/USFM/old/media/magefan_blog/2022/03/Depositphotos_12428241_XL-1024x683.jpg'
        />

      </div>

    </div>
  )
}

export default App