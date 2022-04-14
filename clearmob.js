function clearm() {
    mc.runcmd('tellraw @a {"rawtext" :[{"text" :"§aОчистка мобов и предметов через §c1§3 минуту"}]}');
	mc.runcmd('playsound mob.irongolem.death @a');
    setTimeout("mc.broadcast('§aОчистка мобов и предметов через §43')",60000);
	setTimeout("mc.runcmd('playsound note.banjo @a')",60000);
	setTimeout("mc.runcmd('title @a actionbar §l§c12§33')",60000);
	setTimeout("mc.broadcast('§aОчистка мобов и предметов через §42')",62000);
	setTimeout("mc.runcmd('playsound note.banjo @a')",62000);
	setTimeout("mc.runcmd('title @a actionbar §l§c1§32§c3')",62000);
	setTimeout("mc.broadcast('§aОчистка мобов и предметов через §41')",64000);
	setTimeout("mc.runcmd('playsound note.banjo @a')",64000);
	setTimeout("mc.runcmd('title @a actionbar §l§c§31§c23')",64000);
	setTimeout("mc.runcmd('kill @e[type=item]')",65000);
	setTimeout("mc.runcmd('clearmob')",65000);
	setTimeout("mc.broadcast('§eУдаление мобов прошло успешно!')",66000);
};
function clearmob() {
    mc.runcmd('tp @e[type=!player,type=!armor_stand,type=!Boat,type=!bee,type=!Chest_minecart,type=!Elder_guardian,type=!Ender_crystal,type=!Ender_dragon,type=!Endermite,type=!Ender_pearl,type=!Evocation_illager,type=!Hopper_minecart,type=!Iron_golem,type=!Leash_knot,type=!Lightning_bolt,type=!Minecart,type=!Painting,type=!Shulker,type=!Skeleton_horse,type=!horse,type=!Snow_golem,type=!Splash_potion,type=!Thrown_trident,type=!Tnt,type=!Tnt_minecart,type=!Turtle,type=!Villager,type=!Villager_V2,type=!Vindicator,type=!Wither,type=!Strider,type=!wolf,type=!axolotl,type=!mule,type=!donkey,name=""] ~ ~-70 ~')
};
setInterval(function(){
    mc.runcmdEx("clearm")
    }, 600000);
//me
function me (pl) {
    pl.tell('§cНеизвестная команда или у вас недостаточно прав для ее использования.');
};

//Commands
mc.regPlayerCmd('clearm', 'clearm', clearm, 1);
mc.regConsoleCmd('clearm', 'clearm', clearm);
mc.regConsoleCmd('clearmob', 'clearmob', clearmob);
