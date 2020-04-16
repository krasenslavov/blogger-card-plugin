<?php $bloggers = get_users(['role__in' => ['author', 'subscriber']]);?>

<div class="grid">
  <?php foreach($bloggers as $user):?>
    <user-card name="<?php echo $user->display_name;?>" avatar="<?php echo get_avatar_url($user->ID, array('size' => 512));?>">
      <div slot="email"><?php echo $user->user_email;?></div>
      <div slot="url"><?php echo $user->user_url;?></div>
      <div slot="bio"><?php echo $user->user_description;?></div>
    </user-card>
  <?php endforeach;?>
</div>