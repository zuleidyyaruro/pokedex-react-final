import bug from '../assets/img/icons/bug.svg'
import dark from '../assets/img/icons/dark.svg'
import dragon from '../assets/img/icons/dragon.svg';
import electric from '../assets/img/icons/electric.svg';
import fairy from '../assets/img/icons/fairy.svg';
import fighting from '../assets/img/icons/fighting.svg';
import fire from '../assets/img/icons/fire.svg';
import flying from '../assets/img/icons/flying.svg';
import ghost from '../assets/img/icons/ghost.svg';
import grass from '../assets/img/icons/grass.svg';
import ground from '../assets/img/icons/ground.svg';
import ice from '../assets/img/icons/ice.svg';
import normal from '../assets/img/icons/normal.svg';
import poison from '../assets/img/icons/poison.svg';
import psychic from '../assets/img/icons/psychic.svg';
import rock from '../assets/img/icons/rock.svg';
import steel from '../assets/img/icons/steel.svg';
import water from '../assets/img/icons/water.svg';

const colorBack = (type) => {
    let color = '';
    let background = ''

    switch (type) {

        case 'normal':
            color = 'rgb(80 158 132)';
            background = normal;
            break;
        case 'fighting':
            color = 'rgb(172 102 204 / 63%)';
            background = fighting;
            break;
        case 'flying':
            color = '#caf7e3';
            background = flying;
            break;
        case 'poison':
            color = '#8e9775';
            background = poison;
            break;
        case 'ground':
            color = 'rgb(130 106 106)';
            background = ground;
            break;
        case 'rock':
            color = '#000000b0';
            background = rock;
            break;
        case 'bug':
            color = '#5d00ff63';
            background = bug;
            break;
        case 'ghost':
            color = '#8000ff80';
            background = ghost;
            break;
        case 'steel':
            color = '#cad2bf';
            background = steel;
            break;
        case 'fire':
            color = '#ff9400a1';
            background = fire;
            break;
        case 'water':
            color = '#0000ff54';
            background = water;
            break;
        case 'grass':
            color = '#00ff7875';
            background = grass;
            break;
        case 'electric':
            color = '#f4ff009e';
            background = electric;
            break;
        case 'psychic':
            color = '#94d0cc';
            background = psychic;
            break;
        case 'ice':
            color = '#00c9ff54';
            background = ice;
            break;
        case 'dragon':
            color = '#ff1e00a1';
            background = dragon;
            break;
        case 'dark':
            color = '#1d1d1dc2';
            background = dark;
            break;
        case 'fairy':
            color = '#0000ffad';
            background = fairy;
            break;
        default:
            color = '#dc35bb99';
    }

    return [color, background];
}

export default colorBack;