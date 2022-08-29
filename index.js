
const express = require('express'),
app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static("./"));

app.get('/', (req, res) => {
	res.sendFile('draw.html', {root: './'});
});

app.listen(app.get('port'), () => {
	console.clear();
	console.log(`server started @ http://localhost${app.get('port')}`)
})