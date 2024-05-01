$(document).ready(function () {

    var friends = ['Amber', 'Anthony', 'Olivia', 'Sloane', 'Mark'];
    var locations = [ 'Shop', "Stoute's House", 'Dunbar Dungeon', 'Library', 'Hot Tub', 'Pickleball Court', 'Garage', 'Basement', 'Pool', 'Bike Trail'];
    var weapons = ['weight plate', 'pool noodle', 'silly string', 'spoiled milk', 'light saber', 'Franks Red Hot Sauce', 'couch pillows', 'Red Wing boots', 'compound bow', 'cannon', 'atomizer', 'Uni Oven', 'fire pit', 'hired assasin', 'hockey stick', 'raw spaghetti', 'kettle bell', 'stench of theirs', 'dry wall dust', 'Honda bumper']

    for (var i = 1; i <= 100; i++){
        var h3Element = $('<h3>Accusation '+ i + '</h3>');
        $(h3Element).on('click', createAccusation(i)); 
        $('body').append(h3Element); 
    } 
    
    function createAccusation(i){
        var friendIndex = i % friends.length;
        var locationIndex = i % locations.length;
        var weaponIndex = i % weapons.length;

        return function (){
            alert('Accusation ' + i + ': I accuse ' + friends[friendIndex] + ', with the ' + weapons[weaponIndex] + ' in the ' + locations[locationIndex] + '!');
        }
    };

});

















