import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BotService } from '../../services/bot.service';

@Component({
  selector: 'app-leaderboard-module',
  templateUrl: './leaderboard-module.component.html',
  styleUrls: ['./leaderboard-module.component.css']
})
export class LeaderboardModuleComponent implements OnInit {
  members: any;
  guild: any = {};

  constructor(
    private botService: BotService,
    private route: ActivatedRoute) {}

  async ngOnInit() {
    const botId = this.route.snapshot.paramMap.get('id');
    const guildId = this.route.snapshot.paramMap.get('guildId');

    this.members = await this.botService.getMembers(botId, guildId);
    this.guild = await this.botService.getGuild(botId, guildId);
    console.log(this.guild);
    
  }
}
